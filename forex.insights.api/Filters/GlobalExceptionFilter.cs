using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace forex.insights.api.Filters
{
    /// <summary>
    /// Global 
    /// </summary>
    public class GlobalExceptionFilter(ILogger<IExceptionFilter> logger) : IExceptionFilter
    {
        private readonly ILogger<IExceptionFilter> _logger = logger;

        /// <inheritdoc />
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            _logger.LogError($"Failed with error: {exception.Message}, {exception.InnerException?.StackTrace}");

            context.ExceptionHandled = true;
            context.Result = new ObjectResult(new { error = "An unexpected error occurred" })
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };
        }
    }
}
