using forex.insights.api.Entities.ForexAlerts;
using SendGrid.Helpers.Mail;

namespace forex.insights.api.Templates
{
    /// <summary>
    /// Verification Email Template.
    /// </summary>
    /// <param name="fromEmail">Sender email.</param>
    /// <param name="toEmail">Receiver email.</param>
    /// <param name="subject">Email subject.</param>
    /// <param name="content">Email content.</param>
    public class VerificationEmailTemplate(string fromEmail, string toEmail, string subject, string content)
    {
        /// <summary>
        /// Create Email message.
        /// </summary>
        /// <returns>Message instance.</returns>
        public SendGridMessage CreateMessage()
        {
            return MailHelper.CreateSingleEmail(
                new EmailAddress(fromEmail),
                new EmailAddress(toEmail),
                subject,
                GetContent(),
                GetContent()
            );
        }

        /// <summary>
        /// Get the content for the email.
        /// </summary>
        /// <returns>Html Content.</returns>
        private string GetContent()
        {
            return $"<!doctypehtml><html xmlns=http://www.w3.org/1999/xhtml xmlns:o=urn:schemas-microsoft-com:office:office xmlns:v=urn:schemas-microsoft-com:vml><title></title><!--[if !mso]><!--><meta content=\"IE=edge\"http-equiv=X-UA-Compatible><!--<![endif]--><meta content=\"text/html; charset=UTF-8\"http-equiv=Content-Type><meta content=\"width=device-width,initial-scale=1\"name=viewport><style>#outlook a{{padding:0}}body{{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}}table,td{{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}}img{{border:0;height:auto;line-height:100%;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}}p{{display:block;margin:13px 0}}</style><!--[if mso]><noscript><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml></noscript><![endif]--><!--[if lte mso 11]><style>.mj-outlook-group-fix{{width:100%!important}}</style><![endif]--><style>@media only screen and (min-width:480px){{.mj-column-per-100{{width:100%!important;max-width:100%}}.mj-column-per-50{{width:50%!important;max-width:50%}}</style><style media=\"screen and (min-width:480px)\">.moz-text-html .mj-column-per-100{{width:100%!important;max-width:100%}}.moz-text-html .mj-column-per-50{{width:50%!important;max-width:50%}}</style><style></style><body style=word-spacing:normal;background-color:#f5f5f7><div style=background-color:#f5f5f7><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 align=center style=width:600px width=600><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style=\"margin:0 auto;max-width:600px\"><table border=0 cellpadding=0 cellspacing=0 role=presentation align=center style=width:100%><tr><td style=\"direction:ltr;font-size:0;padding:16px 4px;text-align:center\"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td width=600px><table border=0 cellpadding=0 cellspacing=0 align=center style=width:592px width=592 bgcolor=white><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style=\"background:#fff;background-color:#fff;margin:0 auto;border-radius:24px;max-width:592px\"><table border=0 cellpadding=0 cellspacing=0 role=presentation align=center style=background:#fff;background-color:#fff;width:100%;border-radius:24px><tr><td style=\"direction:ltr;font-size:0;padding:20px 0;text-align:center\"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:592px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class=\"mj-column-per-100 mj-outlook-group-fix\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:28px;line-height:1;text-align:left;color:#000>Forex Insights</div><tr><td style=\"font-size:0;padding:10px 25px;padding-top:8px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;letter-spacing:.5px;line-height:1.5;text-align:left;color:#6e6e73>{content}</div></table></table></div><!--[if mso | IE]><td style=vertical-align:top;width:592px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class=\"mj-column-per-100 mj-outlook-group-fix\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#000>Just a Developer.</div><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:13px;letter-spacing:.5px;line-height:1;text-align:left;color:#6e6e73>www.forexinsights.com</div></table></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><![endif]--></div>";
        }
    }
}

