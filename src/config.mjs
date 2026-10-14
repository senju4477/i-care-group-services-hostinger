export function siteConfig(env = process.env) {
  const review = env.REVIEW_MODE === 'true';
  const origin = (env.SITE_URL || 'https://icgservices.com.au').replace(/\/$/, '');
  if (!/^https:\/\/[^/]+$/.test(origin)) throw new Error('SITE_URL must be an HTTPS origin without a path.');
  const providerReady = Boolean(env.RESEND_API_KEY && env.FROM_EMAIL && (env.BUSINESS_EMAIL || 'admin@icgservices.com.au'));
  const delivery = review ? 'review' : env.FORM_DELIVERY === 'provider' || (env.FORM_DELIVERY !== 'email-app' && providerReady) ? 'provider' : 'email-app';
  return {review, origin, delivery, indexable: !review && env.SITE_INDEXABLE !== 'false'};
}
