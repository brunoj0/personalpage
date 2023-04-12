import { useContent, useLocation } from "@builder.io/qwik-city";

export const geCurrentRouteIndex = () => {
    const { menu } = useContent();
    const { url } = useLocation();

    return menu?.items?.reduce((acc, el, index) =>
        el.href === url.pathname ? index + 1 : acc, 0);
}