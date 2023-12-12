export const appTitle = 'DevRel CRM'

export const getPageTitle = (currentPageTitle?: string) => {
    if (!currentPageTitle) {
        return appTitle;
    }
    return `${currentPageTitle} — ${appTitle}`
}