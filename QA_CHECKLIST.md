# Subscription Flow QA Checklist

## Test Environment
- [ ] Run `npm run dev` on localhost:3000
- [ ] Clear browser cache and cookies
- [ ] Test in incognito/private mode

## Main Page (/) Tests

### Hero Section
- [ ] "Start free trial" button → Should go to `/checkout/basic`

### 4 Pillars Section  
- [ ] "Quick Start Guide" button → Should go to `/documentation/quick-start`

### Pricing Preview Cards
- [ ] Free plan ($0) - "Get started free" → Should go to `/auth/signup`
- [ ] Basic plan ($5) - "Start 7-day trial" → Should go to `/checkout/basic`
- [ ] Standard plan ($10) - "Start 7-day trial" → Should go to `/checkout/standard`
- [ ] Premium plan ($20) - "Start 7-day trial" → Should go to `/checkout/premium`
- [ ] Team plan ($50) - "Start 7-day trial" → Should go to `/checkout/team`

### Comparison Table Section
- [ ] "Start with Premium" button → Should go to `/checkout/premium`
- [ ] "Start free" button → Should go to `/auth/signup`

### Bottom CTA Section
- [ ] "Start your free trial" button → Should go to `/checkout/basic`

## Navigation Tests
- [ ] Desktop "Get started" button → Should go to `/pricing`
- [ ] Mobile menu "Get started" button → Should go to `/pricing`

## Pricing Page (/pricing) Tests
- [ ] Free plan - "Sign up free" → Should go to `/auth/signup`
- [ ] Basic plan - "Start 7-day trial" → Should go to `/checkout/basic`
- [ ] Standard plan - "Start 7-day trial" → Should go to `/checkout/standard`
- [ ] Premium plan - "Start 7-day trial" → Should go to `/checkout/premium`
- [ ] Team plan - "Start 7-day trial" → Should go to `/checkout/team`

## Checkout Page (/checkout/[plan]) Tests
- [ ] Page loads with correct plan name and price
- [ ] Background is dark with visible form
- [ ] Input fields are visible and typeable:
  - [ ] Email field - Can type, shows placeholder "you@example.com"
  - [ ] Card number - Can type, shows placeholder "4242 4242 4242 4242"
  - [ ] Expiry date - Can type, shows placeholder "MM/YY"
  - [ ] CVV - Can type, shows placeholder "123"
- [ ] All inputs have dark background with visible white text
- [ ] Focus states show primary color border
- [ ] Hover states show slightly lighter background
- [ ] Demo notice shows at bottom
- [ ] Submit button shows "Subscribe for $X/month"
- [ ] Test with card 4242 4242 4242 4242:
  - [ ] Should show "Processing..."
  - [ ] Should redirect to `/welcome` on success

## Free Signup Page (/auth/signup) Tests
- [ ] Shows free plan features
- [ ] Email input is visible and typeable
- [ ] Submit button says "Create Free Account"
- [ ] Link to paid plans works

## Welcome Page (/welcome) Tests
- [ ] Shows success message
- [ ] "Go to Quick Start Guide" button → `/documentation/quick-start`
- [ ] Auto-redirects after 10 seconds

## Cookie Consent Flow
- [ ] Non-free plans require cookie consent
- [ ] Shows consent modal if cookies not accepted
- [ ] After accepting, continues with subscription

## Visual/UX Tests
- [ ] All text is readable (white on dark)
- [ ] All buttons have proper hover states
- [ ] Forms have proper focus states
- [ ] Loading states work correctly
- [ ] Error messages display properly

## Known Issues
- [ ] Paddle integration pending (using demo mode)
- [ ] License key generation not implemented
- [ ] Email notifications not implemented

## Notes for Testing
1. Use test card: 4242 4242 4242 4242
2. Any expiry date in the future (e.g., 12/25)
3. Any 3-digit CVV (e.g., 123)
4. Demo mode simulates success only with test card