using forex.insights.api.Entities.ForexAlerts;
using SendGrid.Helpers.Mail;

namespace forex.insights.api.Templates
{
    /// <summary>
    /// Email template.
    /// </summary>
    public class EmailTemplate
    {
        /// <summary>
        /// Create Email message.
        /// </summary>
        /// <param name="activeAlert">Active Alert.</param>
        /// <param name="currentRate">Current rate.</param>
        /// <param name="from">Sender info.</param>
        /// <param name="to">Receiver info.</param>
        /// <returns>Message instance.</returns>
        public SendGridMessage CreateMessage(ForexAlert activeAlert, decimal currentRate, string from, string to)
        {
            return MailHelper.CreateSingleEmail(
                new EmailAddress(from),
                new EmailAddress(to),
                Subject,
                GetContent(activeAlert, currentRate),
                GetContent(activeAlert, currentRate)
            );
        }

        /// <summary>
        /// Subject for the email.
        /// </summary>
        private const string Subject = "Forex Alert Triggered";

        /// <summary>
        /// Get the content for the email.
        /// </summary>
        /// <param name="alert">Active alert.</param>
        /// <param name="currentRate">Current rate.</param>
        /// <returns>Content.</returns>
        private string GetContent(ForexAlert alert, decimal currentRate)
        {
            var fromCurrency = alert.FromCurrency;
            var toCurrency = alert.ToCurrency;
            var minimumRate = alert.MinimumRate;
            var rate = Math.Round(currentRate, 2, MidpointRounding.AwayFromZero);

            return $"<!doctypehtml><html xmlns=http://www.w3.org/1999/xhtml xmlns:o=urn:schemas-microsoft-com:office:office xmlns:v=urn:schemas-microsoft-com:vml><title></title><!--[if !mso]><!--><meta content=\"IE=edge\"http-equiv=X-UA-Compatible><!--<![endif]--><meta content=\"text/html; charset=UTF-8\"http-equiv=Content-Type><meta content=\"width=device-width,initial-scale=1\"name=viewport><style>#outlook a{{padding:0}}body{{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}}table,td{{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}}img{{border:0;height:auto;line-height:100%;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}}p{{display:block;margin:13px 0}}</style><!--[if mso]><noscript><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml></noscript><![endif]--><!--[if lte mso 11]><style>.mj-outlook-group-fix{{width:100%!important}}</style><![endif]--><style>@media only screen and (min-width:480px){{.mj-column-per-100{{width:100%!important;max-width:100%}}.mj-column-per-50{{width:50%!important;max-width:50%}}</style><style media=\"screen and (min-width:480px)\">.moz-text-html .mj-column-per-100{{width:100%!important;max-width:100%}}.moz-text-html .mj-column-per-50{{width:50%!important;max-width:50%}}</style><style></style><body style=word-spacing:normal;background-color:#f5f5f7><div style=background-color:#f5f5f7><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 align=center style=width:600px width=600><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style=\"margin:0 auto;max-width:600px\"><table border=0 cellpadding=0 cellspacing=0 role=presentation align=center style=width:100%><tr><td style=\"direction:ltr;font-size:0;padding:8px 4px;text-align:center\"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td width=600px><table border=0 cellpadding=0 cellspacing=0 align=center style=width:592px width=592 bgcolor=white><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style=\"background:#fff;background-color:#fff;margin:0 auto;border-radius:24px;max-width:592px\"><table border=0 cellpadding=0 cellspacing=0 role=presentation align=center style=background:#fff;background-color:#fff;width:100%;border-radius:24px><tr><td style=\"direction:ltr;font-size:0;padding:20px 0;text-align:center\"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:592px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class=\"mj-outlook-group-fix mj-column-per-100\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:28px;line-height:1;text-align:left;color:#000>Forex Insights</div><tr><td style=\"font-size:0;padding:10px 25px;padding-top:8px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;letter-spacing:.5px;line-height:1.5;text-align:left;color:#6e6e73>We're reaching out to notify you that your currency alert has reached your target of {minimumRate}.</div></table></table></div><!--[if mso | IE]><td style=width:592px><![endif]--><div style=font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr class=\"mj-outlook-group-fix mj-column-per-100\"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:296px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50% class=\"mj-outlook-group-fix mj-column-per-50\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding-top:8px;padding-left:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;font-weight:600;line-height:1;text-align:left;color:#6e6e73>Currency Pair:</div><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;font-weight:600;line-height:1;text-align:left;color:#6e6e73>Current Rate:</div></table></table></div><!--[if mso | IE]><td style=vertical-align:top;width:296px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50% class=\"mj-outlook-group-fix mj-column-per-50\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding-top:8px;padding-right:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;letter-spacing:.5px;line-height:1;text-align:left;color:#000>{fromCurrency} to {toCurrency}</div><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;letter-spacing:.5px;line-height:1;text-align:left;color:#000>{rate}</div></table></table></div><!--[if mso | IE]><![endif]--></div><!--[if mso | IE]><td style=vertical-align:top;width:592px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class=\"mj-outlook-group-fix mj-column-per-100\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:14px;letter-spacing:.5px;line-height:1.5;text-align:left;color:#6e6e73><span style=font-family:Arial;font-size:14px;font-weight:600;line-height:1;text-align:left;color:#aaa>Disclaimer:</span> Please note that our exchange rates are updated once daily and may have changed since the time of this notification. Use this as a guide and consider verifying the rate closer to your decision time.</div></table></table></div><!--[if mso | IE]><td style=vertical-align:top;width:592px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class=\"mj-outlook-group-fix mj-column-per-100\"><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=vertical-align:top;padding:8px><table border=0 cellpadding=0 cellspacing=0 role=presentation width=100%><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#000>The Developer Behind Your Alerts.</div><tr><td style=\"font-size:0;padding:10px 25px;word-break:break-word\"align=left><div style=font-family:Arial;font-size:13px;letter-spacing:.5px;line-height:1;text-align:left;color:#6e6e73>themannimaster.github.io/forex.insights</div><div>https://themannimaster.github.io/forex.insights</div></table></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><![endif]--></div>";
        }
    }
}
