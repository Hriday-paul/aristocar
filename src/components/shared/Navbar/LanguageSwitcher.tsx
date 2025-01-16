'use client'

import { usePathname, useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const LanguageSwitcher = ({ defaultLang, languages }: { defaultLang: string, languages: string[] }) => {
    const router = useRouter();
    const pathname = usePathname();

    const switchLang = (value: string) => {
        router.replace("/" + value + pathname)
    }

    return (
        <div className="mr-1.5 md:mr-3">
            <Select onValueChange={switchLang} defaultValue={defaultLang}>
                <SelectTrigger className="w-20 h-7 rounded-sm bg-primary border-strokedark text-secondary">
                    <SelectValue placeholder="eng" />
                </SelectTrigger>
                <SelectContent className="rounded-sm">
                    {
                        languages?.map(lang => {
                            return <SelectItem key={lang} value={lang} className="h-6">{lang}</SelectItem>
                        })
                    }
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSwitcher;