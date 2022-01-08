export { default as DefaultHeader } from '../../components/DefaultHeader.vue'
export { default as FeatureProduct } from '../../components/FeatureProduct.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ReviewSection } from '../../components/ReviewSection.vue'

export const LazyDefaultHeader = import('../../components/DefaultHeader.vue' /* webpackChunkName: "components/DefaultHeader" */).then(c => c.default || c)
export const LazyFeatureProduct = import('../../components/FeatureProduct.vue' /* webpackChunkName: "components/FeatureProduct" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyReviewSection = import('../../components/ReviewSection.vue' /* webpackChunkName: "components/ReviewSection" */).then(c => c.default || c)
