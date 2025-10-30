import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { resolveUrl } from '@/lib/utils';
import registry from '@/routes/registry';
import { Link, usePage } from '@inertiajs/react';

export function NavMain() {
    const page = usePage<any>();
    const registies = page.props.auth.registies;

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Registries</SidebarGroupLabel>
            <SidebarMenu>
                {registies?.length > 0 &&
                    registies.map((item: any) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                asChild
                                isActive={page.url.includes(
                                    resolveUrl(item.id),
                                )}
                                tooltip={{ children: item.name }}
                            >
                                <Link href={registry.show(item.id)} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
