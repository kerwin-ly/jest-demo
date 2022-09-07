import server from "../../mockServer/server";
import { rest } from "msw";
import { render, screen } from "@testing-library/react";
import AuthButton from "@/components/AuthButton";
import React from "react";
import { UserRoleType } from "@/apis/user";

// initialize
const setup = (userType: UserRoleType) => {
  server.use(
    rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ userType }));
    })
  );
};

describe("AuthButton Mock Http Request", () => {
  it("可以正确展示普通用户按钮内容", async () => {
    await setup("user");

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });

  it("可以正确展示管理员按钮内容", async () => {
    await setup("admin");

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
});
