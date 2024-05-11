import { useLocale, useTranslations } from "next-intl";
import PageLayout from "../../components/PageLayout";
import { Link } from "../../navigation";
import LocaleSwitcher from "../../components/LocaleSwitcher";

export default function Index() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <PageLayout title={t("title")}>
      <p>{t("description")}</p>
      <p>{t("subtitle")}</p>
      <div className="flex gap-3">
        <LocaleSwitcher />
      </div>
      <div>
        <Link href="/about">{t("about")}</Link>
      </div>
    </PageLayout>
  );
}
