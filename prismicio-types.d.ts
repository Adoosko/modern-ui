// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CaseStudyDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Case Study documents
 */
interface CaseStudyDocumentData {
  /**
   * Company field in *Case Study*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.company
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company: prismic.TitleField;

  /**
   * Description  field in *Case Study*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Logo Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.logo_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Case Study*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CaseStudyDocumentDataSlicesSlice> /**
   * Meta Title field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: case_study.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: case_study.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Case Study document from Prismic
 *
 * - **API ID**: `case_study`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseStudyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CaseStudyDocumentData>,
    "case_study",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | CallToActionSlice
  | IntegrationsSlice
  | CaseStudiesSlice
  | ShowcaseSlice
  | BentoSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * CTA Button field in *Settings → Navigation*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.navigation[].cta_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta_button: prismic.BooleanField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site_title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | CaseStudyDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *Bento → Primary*
 */
export interface BentoSliceDefaultPrimary {
  /**
   * heading field in *Bento → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: italic for bold text
   * - **API ID Path**: bento.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * body field in *Bento → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *Bento → Items*
 */
export interface BentoSliceDefaultItem {
  /**
   * Title field in *Bento → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Body field in *Bento → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.items[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Bento → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Wide field in *Bento → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bento.items[].wide
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  wide: prismic.BooleanField;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BentoSliceDefaultPrimary>,
  Simplify<BentoSliceDefaultItem>
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<"bento", BentoSliceVariation>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Heading field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Button Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *CaseStudies → Primary*
 */
export interface CaseStudiesSliceDefaultPrimary {
  /**
   * Heading field in *CaseStudies → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *CaseStudies → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *CaseStudies → Items*
 */
export interface CaseStudiesSliceDefaultItem {
  /**
   * Case Studies field in *CaseStudies → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.items[].case_studies
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  case_studies: prismic.ContentRelationshipField;
}

/**
 * Default variation for CaseStudies Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CaseStudiesSliceDefaultPrimary>,
  Simplify<CaseStudiesSliceDefaultItem>
>;

/**
 * Slice variation for *CaseStudies*
 */
type CaseStudiesSliceVariation = CaseStudiesSliceDefault;

/**
 * CaseStudies Shared Slice
 *
 * - **API ID**: `case_studies`
 * - **Description**: CaseStudies
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudiesSlice = prismic.SharedSlice<
  "case_studies",
  CaseStudiesSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Integrations → Primary*
 */
export interface IntegrationsSliceDefaultPrimary {
  /**
   * Heading field in *Integrations → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Integrations → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *Integrations → Items*
 */
export interface IntegrationsSliceDefaultItem {
  /**
   * Icon field in *Integrations → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "cloudflare" | "npm" | "github" | "figma" | "fly" | "digitalocean"
  >;
}

/**
 * Default variation for Integrations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntegrationsSliceDefaultPrimary>,
  Simplify<IntegrationsSliceDefaultItem>
>;

/**
 * Slice variation for *Integrations*
 */
type IntegrationsSliceVariation = IntegrationsSliceDefault;

/**
 * Integrations Shared Slice
 *
 * - **API ID**: `integrations`
 * - **Description**: Integrations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSlice = prismic.SharedSlice<
  "integrations",
  IntegrationsSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * text field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Showcase → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
  /**
   * Heading field in *Showcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * image field in *Showcase → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Icon field in *Showcase → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"gear" | "cycle">;

  /**
   * Subheading field in *Showcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.RichTextField;

  /**
   * Body field in *Showcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Showcase → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Showcase → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: link for a button
   * - **API ID Path**: showcase.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Showcase → Primary*
 */
export interface ShowcaseSliceReversePrimary {
  /**
   * Heading field in *Showcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * image field in *Showcase → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Icon field in *Showcase → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"gear" | "cycle">;

  /**
   * Subheading field in *Showcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.RichTextField;

  /**
   * Body field in *Showcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Showcase → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Showcase → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: link for a button
   * - **API ID Path**: showcase.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Reverse variation for Showcase Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceReverse = prismic.SharedSliceVariation<
  "reverse",
  Simplify<ShowcaseSliceReversePrimary>,
  never
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault | ShowcaseSliceReverse;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<
  "showcase",
  ShowcaseSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CaseStudyDocument,
      CaseStudyDocumentData,
      CaseStudyDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      BentoSlice,
      BentoSliceDefaultPrimary,
      BentoSliceDefaultItem,
      BentoSliceVariation,
      BentoSliceDefault,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CaseStudiesSlice,
      CaseStudiesSliceDefaultPrimary,
      CaseStudiesSliceDefaultItem,
      CaseStudiesSliceVariation,
      CaseStudiesSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      IntegrationsSlice,
      IntegrationsSliceDefaultPrimary,
      IntegrationsSliceDefaultItem,
      IntegrationsSliceVariation,
      IntegrationsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ShowcaseSlice,
      ShowcaseSliceDefaultPrimary,
      ShowcaseSliceReversePrimary,
      ShowcaseSliceVariation,
      ShowcaseSliceDefault,
      ShowcaseSliceReverse,
    };
  }
}
