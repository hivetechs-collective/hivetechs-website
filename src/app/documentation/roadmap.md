# Development Roadmap & Coming Soon

This page tracks upcoming features and infrastructure improvements for hive-tools.

## 🚀 NPM Registry Publication

### Current Status
- **Package Name**: @hivetechs/hive-ai
- **Status**: Pre-release, available via GitHub only
- **Target**: Q1 2025 public npm release

### Pre-Publication Checklist
- [ ] Create npm organization account (@hivetechs)
- [ ] Verify package name availability
- [ ] Security audit (`npm audit` clean)
- [ ] License validation system (server-side)
- [ ] Remove any sensitive configuration
- [ ] Create comprehensive README.md
- [ ] Add proper .npmignore file
- [ ] Test installation process
- [ ] Set up automated publishing CI/CD

### Security Requirements
1. **License Validation**
   - Must validate against server API
   - No hardcoded keys or secrets
   - Graceful fallback for network issues

2. **API Key Protection**
   - User keys stored locally only
   - Encrypted storage option
   - Never transmitted to our servers

## 💳 Paddle Store Integration

### Current Status
- **Platform**: Paddle (pending)
- **Blocker**: Awaiting FL LLC registration number
- **Temporary**: Manual license distribution

### Paddle Setup Requirements
- [ ] FL LLC registration complete
- [ ] Paddle merchant account approval
- [ ] Product catalog setup
- [ ] Webhook integration
- [ ] License key generation API
- [ ] Customer portal
- [ ] Success URL redirect to `/welcome`
- [ ] Post-purchase flow to Quick Start

### Store Features (Planned)
- **Free Tier**: Community access with own API keys
- **Basic Plan**: $X/month - Managed access to select models
- **Pro Plan**: $X/month - All models + priority support
- **Enterprise**: Custom pricing + SLA

## 🔧 Technical Improvements

### Q1 2025
- [ ] NPM package publication
- [ ] Paddle store integration
- [ ] License server v2
- [ ] Auto-update mechanism
- [ ] Windows installer (.exe)
- [ ] macOS installer (.dmg)

### Q2 2025
- [ ] VS Code extension
- [ ] JetBrains plugin
- [ ] Web dashboard
- [ ] Team collaboration features
- [ ] API access for automation

## 📱 Platform Expansion

### Desktop Apps (Planned)
- Electron-based GUI
- System tray integration
- Native notifications
- Keyboard shortcuts

### Mobile Consideration
- REST API for mobile apps
- React Native companion app
- Push notifications for alerts

## 🤝 Community Features

### Open Source Considerations
- Core CLI tools remain open source
- Premium features via license
- Community contribution guidelines
- Plugin ecosystem

### Documentation Expansion
- Video tutorials
- Interactive examples
- Community showcase
- Recipe library

## 📞 Support Infrastructure

### Before Public Launch
- [ ] Support ticket system
- [ ] Knowledge base
- [ ] Community forum
- [ ] Office hours/live chat
- [ ] SLA for paid tiers

## 🔐 Enterprise Features

### Coming Soon
- SSO/SAML integration
- Audit logs
- Team management
- Usage policies
- Custom model deployment
- On-premise options

---

**Last Updated**: December 2024

Check back regularly for updates or join our [newsletter](#) for announcements.