import m from "mithril";

export const App = () => {
  let msg = "";
  return {
    oninit: async () => {
      const res = await m.request<any>("/api/hello-world");
      msg = res.msg;
    },
    view: () => {
      return <div>{msg}</div>;
    },
  };
};
