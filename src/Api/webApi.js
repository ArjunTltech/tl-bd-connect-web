import axiosInstance from "./AxiosInstace";

export const getService =async()=>{
    try {        
        const response = await axiosInstance.get('/category/get-service')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getProduct =async()=>{
    try {
        const response = await axiosInstance.get('/category/get-product')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getBusiness =async()=>{
    try {
        const response = await axiosInstance.get('/category/get-business')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getSlider =async()=>{
    try {
        const response = await axiosInstance.get('/slider/get-all-sliders')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const addEnquiry =async(enquiryData)=>{
    try {
        const response = await axiosInstance.post('/enquiry/add-enqiuires',enquiryData)
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getSocial =async()=>{
    try {
        const response = await axiosInstance.get('/social/get-all-social')
        return response
    } catch (error) {
        console.error(error);
        
    }
}

export const getTooltips =async()=>{
    try {
        const response = await axiosInstance.get('/tooltips/view-all-tooltips')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const chatbot =async()=>{
    try {
        const response = await axiosInstance.get('/chatbot/get-all-question')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getBrochure =async()=>{
    try {
        const response = await axiosInstance.get('/brochure/get-all-brochure')
        return response
    } catch (error) {
        console.error(error);
        
    }
}

export const getOrganizationDetails =async()=>{
    try {
        const response = await axiosInstance.get('/organization/organization-details')
        return response
    } catch (error) {
        console.error(error);
        
    }
    }