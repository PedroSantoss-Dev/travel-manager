import { NAV_LINKS } from "@/constant/links";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import LoginForm from "./login";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
  return (
    <nav className=" flex justify-between items-center container p-2 relative z-30 py-5 ">
      <Link href="/" className=" flex items-center">
        <Image src="/travel-logo.png" alt="logo" width={50} height={29} />
        <strong className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-500   to-green-500 ">Travel Manager</strong>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 flex justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex justify-center items-center mr-6 hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="bg-zinc-900"
            />
          </PopoverTrigger>
          <PopoverContent>
            <LoginForm />
          </PopoverContent>
        </Popover>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="w-[21.875rem]">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <ul className=" flex flex-col lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 flex justify-start cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
            <Popover  >
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  title="Login"
                  icon="/user.svg"
                  variant="bg-zinc-900"
                />
              </PopoverTrigger>
              <PopoverContent>
                <LoginForm />
              </PopoverContent>
            </Popover>
          </ul>
        </SheetContent>
      </Sheet>

    </nav>
  );
}

export default Header;