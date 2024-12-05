# dd-sync

# Datadog Sync Tool

Datadog Sync Tool is a web-based tool for synchronizing dashboards and monitors between different Datadog accounts. It also provides standardized dashboards and monitors that I have personally created. API keys used for synchronization are not stored.

## Key Features

### Dashboard Synchronization
- Clone dashboards from source to target environment
- Title-based filtering support
- Synchronize all dashboard components including settings, widgets, and variables

### Monitor Synchronization
- Clone monitors from source to target environment
- Tag-based filtering support
- Synchronize all monitor components including notification settings and thresholds

### Recommendation Dashboards
- Datadog Cost Estimate Dashboards
- Infrastructure Dashboards
- AWS Infrastructure Dashboards
- APM Dashboards
- RUM Dashboards
- MySQL Dashboards
- PostgreSQL Dashboards

### Recommendation Monitors
- Infrastructure Monitors
- Network Monitors
- Kubernetes Monitors
- APM Monitors
- Log Monitors
- RUM Monitors

### Supported Datadog Regions
- US1 (api.datadoghq.com)
- US3 (api.us3.datadoghq.com)
- US5 (api.us5.datadoghq.com)
- EU (api.datadoghq.eu)
- AP1 (api.ap1.datadoghq.com)
- US1-FED (api.ddog-gov.com)

## Tech Stack

- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- HTTP Client: Axios
- State Management: React Hooks

## Usage

1. Source Environment Setup
   - Enter API Key and Application Key
   - Select region
   - Set filter (optional)

2. Target Environment Setup
   - Enter API Key and Application Key
   - Select region

3. Click Sync Button
   - Monitor synchronization progress
   - Check result report

## Important Notes

- API keys and Application keys must have appropriate permissions
- Synchronizing large numbers of dashboards/monitors may take time
- Existing dashboards/monitors in the target environment will be overwritten
- No API keys or Application keys are stored in the application

## License

This is a personal project created for internal use. Feel free to use and modify as needed.