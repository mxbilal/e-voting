import voteCall from "./VoteCall";

export const getVoters = async () => {
  try {
    let res = await voteCall.get(`/user/voters/?province=1&district=2&tehsil=1&council=1&polling_station=1`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};
export const getDistricts = async () => {
  try {
    const response = await voteCall.get("/user/district/1");
    return response.data.result || [];
  } catch (error) {
    console.error("Failed to fetch districts:", error);
    return [];
  }
};
export const getTehsils = async (districtId) => {
  try {
    const response = await voteCall.get(`/user/tehsil/${districtId}`);
    return response.data.result || [];
  } catch (error) {
    console.error("Failed to fetch tehsils:", error);
    return [];
  }
};

export const getCouncils = async (tehsilId) => {
  try {
    const response = await voteCall.get(`/user/council/${tehsilId}`);
    return response.data.result || [];
  } catch (error) {
    console.error("Failed to fetch councils:", error);
    return [];
  }
};

export const getCandidates = async (filters) => {
  try {
    const res = await voteCall.get("/user/voters/candidates/", {
      params: {
        province: 1,
        division: 1,
        district: filters?.district,
        tehsil: filters?.tehsil,
        council: filters?.council,
        polling_station: filters?.station,
      },
    });
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const getPollingStations = async (id) => {
  try {
    let res = await voteCall.get(`/user/polling_station/${id}`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const getPollingStationStats = async (id) => {
  try {
    let res = await voteCall.get(`/user/pollingStation/votes/statics/${id}/`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const getVotesDetail = async (id, type) => {
  try {
    let res = await voteCall.get(`/user/${type}/votes/statics/${id}/`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const getCandidatesList = async (id) => {
  try {
    let res = await voteCall.get(`/user/candidates/List/${id}/`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const getCandidateProfile = async (id) => {
  try {
    let res = await voteCall.get(`/user/candidates/${id}/`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const getBooth = async (id) => {
  try {
    let res = await voteCall.get(`user/polling_booth/1`);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};

export const checkVoter = async (cnic) => {
  try {
    let res = await voteCall.post(`user/verify_cnic/`, cnic);
    const { error, result, message, code } = res.data;
    if (code === 0) {
      return { success: true, error: false, message, data: result };
    }
  } catch (error) {
    return { success: false, data: [], error };
  }
};
