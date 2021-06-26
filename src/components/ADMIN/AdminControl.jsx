export const AdminControl = (state) => {

    const mainVis   = state.main.mainVis;
    const headerVis = state.header.headerVis;
    const footerVis = state.footer.footerVis;
    const sliderVis = state.main.sliderVis;


    const controlVis = {
        mainVis, 
        headerVis,
        footerVis,
        sliderVis,
    }






    return {controlVis}; 
}
