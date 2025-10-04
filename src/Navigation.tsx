import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "./components/ui/navigation-menu"

export function Nav() {
  return (
    // 1. Clases ajustadas para posicionamiento: 
    // - fixed top-0 right-0 (Fijo en esquina superior derecha)
    // - w-auto (Ancho automático para no ocupar toda la pantalla)
    // - p-4 (Padding para separarlo de los bordes)
    <NavigationMenu 
        className="
            fixed top-0 right-0 w-auto 
            z-50 p-4 
            bg-transparent 
            text-primary-foreground 
           
        "
    >
      <NavigationMenuList className="flex space-x-4 p-4 mr-7">
        <NavigationMenuItem>
          <NavigationMenuLink 
            href=""
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 2 hover:text-black px-4">Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            href="/"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 2 hover:text-black px-4">Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            href=""
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 2 hover:text-black px-4">About us
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            href=""
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 2 hover:text-black px-4">Challenge
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            href=""
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 2 hover:text-black px-4">The Game
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav