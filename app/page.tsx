import { Layout } from "@/components/tailwind/layout";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return <Layout className="h-full"></Layout>;
}
