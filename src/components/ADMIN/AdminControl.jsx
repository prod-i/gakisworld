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
    }






    return {controlVis}; 
}
