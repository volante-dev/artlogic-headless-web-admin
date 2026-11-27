"use client";
import {LocalizedTextControl} from '../presentation/LocalizedField';
import type {ComponentProps} from 'react';
/** Presentational form field shared with exact-version translation workspaces. */
export function FormTextInput(props:ComponentProps<typeof LocalizedTextControl>){return <LocalizedTextControl lengthUnit="utf16" showCount={false} {...props}/>;}
