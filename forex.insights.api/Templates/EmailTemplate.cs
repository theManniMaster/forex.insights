﻿using forex.insights.api.Entities.ForexAlerts;
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
        /// <param name="from">Sender info.</param>
        /// <param name="to">Receiver info.</param>
        /// <returns>Message instance.</returns>
        public SendGridMessage CreateMessage(ForexAlert activeAlert, string from, string to)
        {
            return MailHelper.CreateSingleEmail(
                new EmailAddress(from),
                new EmailAddress(to),
                Subject,
                GetPlainTextContent(activeAlert),
                GetHtmlContent(activeAlert)
            );
        }

        /// <summary>
        /// Subject for the email.
        /// </summary>
        private const string Subject = "Forex Alert Triggered";

        /// <summary>
        /// Get the html content for the email.
        /// </summary>
        /// <param name="alert">Active alert.</param>
        /// <returns>Html Content.</returns>
        private string GetHtmlContent(ForexAlert alert)
        {
            var fromCurrency = alert.FromCurrency;
            var toCurrency = alert.ToCurrency;
            var rate = alert.MinimumRate;

            return $"<!doctype html><html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\"><head><title></title><!--[if !mso]><!--><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]--><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style type=\"text/css\">#outlook a {{ padding:0; }}\r\n          body {{ margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }}\r\n          table, td {{ border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }}\r\n          img {{ border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }}\r\n          p {{ display:block;margin:13px 0; }}</style><!--[if mso]>\r\n        <noscript>\r\n        <xml>\r\n        <o:OfficeDocumentSettings>\r\n          <o:AllowPNG/>\r\n          <o:PixelsPerInch>96</o:PixelsPerInch>\r\n        </o:OfficeDocumentSettings>\r\n        </xml>\r\n        </noscript>\r\n        <![endif]--><!--[if lte mso 11]>\r\n        <style type=\"text/css\">\r\n          .mj-outlook-group-fix {{ width:100% !important; }}\r\n        </style>\r\n        <![endif]--><style type=\"text/css\">@media only screen and (min-width:480px) {{\r\n        .mj-column-per-100 {{ width:100% !important; max-width: 100%; }}\r\n.mj-column-per-50 {{ width:50% !important; max-width: 50%; }}\r\n      }}</style><style media=\"screen and (min-width:480px)\">.moz-text-html .mj-column-per-100 {{ width:100% !important; max-width: 100%; }}\r\n.moz-text-html .mj-column-per-50 {{ width:50% !important; max-width: 50%; }}</style><style type=\"text/css\"></style></head><body style=\"word-spacing:normal;background-color:#f5f5f7;\"><div style=\"background-color:#f5f5f7;\"><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:8px 4px;text-align:center;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" width=\"600px\" ><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:592px;\" width=\"592\" bgcolor=\"white\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"background:white;background-color:white;margin:0px auto;border-radius:24px;max-width:592px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:white;background-color:white;width:100%;border-radius:24px;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:20px 0;text-align:center;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:592px;\" ><![endif]--><div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:28px;line-height:1;text-align:left;color:#000000;\">Forex Insights</div></td></tr><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;padding-top:8px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:14px;letter-spacing:0.5px;line-height:1.5;text-align:left;color:#6e6e73;\">We’re reaching out to notify you that your currency alert has been triggered.</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td class=\"\" style=\"width:592px;\" ><![endif]--><div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;\"><!--[if mso | IE]><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" ><tr><td style=\"vertical-align:top;width:296px;\" ><![endif]--><div class=\"mj-column-per-50 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding-top:8px;padding-left:8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:14px;font-weight:600;line-height:1;text-align:left;color:#6e6e73;\">Currency Pair:</div></td></tr><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:14px;font-weight:600;line-height:1;text-align:left;color:#6e6e73;\">Exchange Rate:</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td style=\"vertical-align:top;width:296px;\" ><![endif]--><div class=\"mj-column-per-50 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding-top:8px;padding-right:8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:14px;letter-spacing:0.5px;line-height:1;text-align:left;color:#000000;\">{fromCurrency} to {toCurrency}</div></td></tr><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:14px;letter-spacing:0.5px;line-height:1;text-align:left;color:#000000;\">{rate}</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div><!--[if mso | IE]></td><td class=\"\" style=\"vertical-align:top;width:592px;\" ><![endif]--><div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:14px;letter-spacing:0.5px;line-height:1.5;text-align:left;color:#6e6e73;\">If you’d like to adjust your preferences, please log into your account.</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td><td class=\"\" style=\"vertical-align:top;width:592px;\" ><![endif]--><div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td style=\"vertical-align:top;padding:8px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\"><tbody><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#000000;\">Just a Developer.</div></td></tr><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:Arial;font-size:13px;letter-spacing:0.5px;line-height:1;text-align:left;color:#6e6e73;\">www.forexinsights.com</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>";
        }

        /// <summary>
        /// Get the plain text content for the email.
        /// </summary>
        /// <param name="alert">Active alert.</param>
        /// <returns>Plain text content.</returns>
        private string GetPlainTextContent(ForexAlert alert)
        {
            var fromCurrency = alert.FromCurrency;
            var toCurrency = alert.ToCurrency;
            var rate = alert.MinimumRate;

            return $"Currency Pair: {fromCurrency} to {toCurrency}\nExchange Rate: {rate}";
        }
    }
}
