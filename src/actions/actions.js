export const toggleLoading = (loading, type) => {
    return {
        type: type,
        payload: loading
    }
};

export const fetchError = (error, type) => {
    return {
        type: type,
        payload: error
    }
};

export const fetchData = (data, type) => {
    return {
        type: type,
        payload: data
    }
};

export const fetch = async (dispatch, apiMethod, page, search, loadingType, errorType, dataType) => {
    dispatch(toggleLoading(true, loadingType));
    let data = await apiMethod(page, search);
    if(data.status === 200) {
        dispatch(fetchData(data.data, dataType));
        dispatch(toggleLoading(false, loadingType));
    } else {
        dispatch(fetchError(true, errorType));
    }
};

export const updateState = (state ,action) => {
    const {page, results, total_pages} = action.payload;
    return {...state, data: results, total_pages: total_pages, page: page};
};