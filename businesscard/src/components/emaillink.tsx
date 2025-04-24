const EmailLink = (props: { email: any; subject: string; body: string; children: any; }) => {
  const email = props.email;
  const subject = props.subject || '';
  const body = props.body || '';
  const children = props.children;

  let params = '';

  if (subject || body) {
    params = '?';
  }

  if (subject) {
    params += 'subject=' + encodeURIComponent(subject);
  }

  if (body) {
    if (subject) {
      params += '&';
    }
    params += 'body=' + encodeURIComponent(body);
  }

  const mailtoLink = 'mailto:' + email + params;

  return (
    <a href={mailtoLink} className="mail">
      {children}
    </a>
  );
};

export default EmailLink;