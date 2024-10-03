export const getJobs = async () => {
  const res = await fetch(
    "https://hireflux-production.up.railway.app/jobs",
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
};

export const getJobById = async (id) => {
  const { getToken } = useAuth();   const token = await getToken();
  
  const res = await fetch(`https://hireflux-production.up.railway.app/jobs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};

export const createJob = async ({
  title,
  description,
  type,
  location,
  questions,
}) => {
  const { getToken } = useAuth();   const token = await getToken();

  await fetch("https://hireflux-production.up.railway.app/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      type,
      location,
      questions,
    }),
  });
};
