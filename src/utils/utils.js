import emailjs from 'emailjs-com';

const submitToSheet = async (data) => {
  try {
    const res = await fetch("/api/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`SubmitContactData failed: ${res.status} ${text}`);
    }

    // try parse JSON if returned, otherwise return null
    try {
      return await res.json();
    } catch {
      return null;
    }
  } catch (err) {
    console.error('submitToSheet error:', err);
    throw err;
  }
};

// const sendEmailAdmin = (data) => {
//   return emailjs.send(
//     "service_6ktec7a",
//     "template_mry5agc",
//     {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     },
//     "xjNRRxm89WynVZ3qT"
//   );
// };

const sendEmailUser = (data) => {
  return emailjs.send(
    "service_6ktec7a",
    "template_4xxau3o",
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    "xjNRRxm89WynVZ3qT"
  );
};

export { submitToSheet, sendEmailUser };