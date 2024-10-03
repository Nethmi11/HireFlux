
export const getJobApllicationsForJob = async (id) => {
  const { getToken } = useAuth();   const token = await getToken();

  const res = await fetch(`https://hireflux-production.up.railway.app/jobApplications?jobId=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getJobApplicationById = async (id) => {
  const { getToken } = useAuth();   const token = await getToken();

  const res = await fetch(`https://hireflux-production.up.railway.app/jobApplications/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const createJobApplication = async ({
  userId,
  fullName,
  job,
  answers,
}) => {
  const { getToken } = useAuth();   const token = await getToken();

  await fetch("https://hireflux-production.up.railway.app/jobApplications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId: userId,
      fullName: fullName,
      job,
      answers,
    }),
  });
};
