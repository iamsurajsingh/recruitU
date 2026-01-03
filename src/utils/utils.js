import emailjs from 'emailjs-com';

const submitToSheet = async (data) => {
  const res = await fetch('/api/proxy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) throw new Error('Request failed');
  return res.json();
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