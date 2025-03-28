
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
    { code: 'de', name: 'Deutsch' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ml', name: 'മലയാളം' }, 
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' }, 
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ar', name: 'العربية' },
    { code: 'ms', name: 'Bahasa Melayu' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
    { code: 'bn', name: 'বাংলা' },        // Bengali
    { code: 'ko', name: '한국어' },        // Korean
    { code: 'vi', name: 'Tiếng Việt' },   // Vietnamese
    { code: 'tr', name: 'Türkçe' },       // Turkish
    { code: 'it', name: 'Italiano' }      // Italian
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[300px] overflow-y-auto">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="cursor-pointer"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
