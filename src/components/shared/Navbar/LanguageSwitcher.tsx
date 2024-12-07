'use client'

import { usePathname, useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const LanguageSwitcher = ({ defaultLang, langEng, langRo }: { defaultLang: string, langEng: string, langRo: string }) => {
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
                    <SelectItem value="en" className="h-6">{langEng}</SelectItem>
                    <SelectItem value="rom" className="h-6">{langRo}</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSwitcher;