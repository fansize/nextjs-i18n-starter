import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../../../components/LocaleSwitcher";

export default function Pagee() {
  const t = useTranslations("About");
  const locale = useLocale();

  return (
    <div>
      <p>{t("title")}</p>
      <p>{t("description")}</p>
      <LocaleSwitcher />
    </div>
  );
}
