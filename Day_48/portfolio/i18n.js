import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./public/assets/messages/${locale}.json`)).default,
}));
