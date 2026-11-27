"use client";
import {LocalizedTextControl} from '../presentation/LocalizedField';
import type {ComponentProps} from 'react';
/** Shared plain-text authoring control; rich text keeps the native RichTextField. */
export function TranslationTextField(props:ComponentProps<typeof LocalizedTextControl>){return <LocalizedTextControl showCount={false} {...props}/>;}
