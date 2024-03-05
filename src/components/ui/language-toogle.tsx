import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';

type SupportedLanguages = 'en' | 'pt';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = (language: SupportedLanguages) => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mr-2 cursor-default focus:outline-none focus:ring-0 active:border-none active:ring-none">
          <Globe stroke-width="1.5" className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage("pt")}>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}