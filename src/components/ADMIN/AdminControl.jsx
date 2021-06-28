export const AdminControl = (state) => {

    const headerVis   = state.header.headerVis;
    const footerVis   = state.footer.footerVis;

    const mainVis     = state.main.mainVis;
    const sliderVis   = state.main.slider.sliderVis;
    const bannerVis   = state.main.banner.bannerVis;
    const continueVis = state.main.continueView.continueViewVis;
    const prevNewsVis = state.main.prevNews.prevNewsVis;
    const popularVis  = state.main.popular.popularVis;

    const catalogVis      = state.catalog.catalogVis;
    const noveltyVis      = state.catalog.novelty.noveltyVis;
    const searchVis       = state.search.searchVis;
    const catalogListVis  = state.catalog.catalogList.catalogListVis;

    const newsVis         = state.news.newsVis;
    const newsListVis     = state.news.newsList.newsListVis;
    const newsSliderVis   = state.news.newsSlider.newsSliderVis;
    const newsSidebarVis  = state.news.newsSidebar.newsSidebarVis;

    const calendarVis  = state.calendar.calendarVis;
    
    const subVis        = state.subscribe.subVis;
    const subCardsVis   = state.subscribe.subList.subCardsVis;
    const subBannerVis  = state.subscribe.subBanner.subBannerVis;
    const subFormVis    = state.subscribe.subForm.subFormVis;

    const profileVis      = state.profile.profileVis;
    const profileMenuVis  = state.profile.profileMenu.profileMenuVis;

    const loginVis  = state.login.loginVis;


    const controlVis = {
        headerVis,
        footerVis,

        mainVis, 
        sliderVis,
        bannerVis,
        continueVis,
        prevNewsVis,
        popularVis,

        catalogVis,
        noveltyVis,
        searchVis,
        catalogListVis,

        newsVis,
        newsListVis,
        newsSliderVis,
        newsSidebarVis,

        calendarVis,

        subVis,
        subCardsVis,
        subBannerVis,
        subFormVis,

        profileVis,
        profileMenuVis,
        
        loginVis,
    }






    return {controlVis}; 
}
