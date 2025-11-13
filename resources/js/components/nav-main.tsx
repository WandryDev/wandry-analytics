import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { resolveUrl } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

export function NavMain() {
    const page = usePage<any>();
    const registries = page.props.auth.registries;

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Registries</SidebarGroupLabel>
            <SidebarMenu>
                {registries?.length > 0 &&
                    registries.map((item: any) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                asChild
                                isActive={page.url.includes(
                                    resolveUrl(item.id),
                                )}
                                tooltip={{ children: item.name }}
                            >
                                <Link
                                    href={route('registry.show', item.id)}
                                    prefetch
                                >
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
