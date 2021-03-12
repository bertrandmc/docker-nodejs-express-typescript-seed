import helmet from "helmet";

export default () => {
  return helmet({
    referrerPolicy: { policy: "no-referrer" },
  });
};
