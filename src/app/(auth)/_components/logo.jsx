import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Poppins(
    {
        subsets: ["latin"],
        weight: ["200", "300", "400", "500", "500", "600", "700", "800"]
    }
)
export const Logo = () => {
    return (
        <div className=' flex flex-col items-center gap-y-4'>
            <div className=' p-1'>
                <Image src="/images/logo.png" alt="Gamehub" height="120" width="120" />
            </div>
            <div className={cn('flex flex-col items-center', font.className)}>
                {/* <p className="text-xl font-semibold">
                    Lunatic
                </p> */}
                <p className="text-sm text-muted-foreground">
                    Stream music for free
                </p>
            </div>
        </div>
    )
}