"use client";
import {LocalizedTextControl} from '../presentation/LocalizedField';
import type {ComponentProps} from 'react';
/** Commerce schemas count UTF-16 units; structure, money and stock use native controls. */
export function LocalizedCommerceTextControl(props:ComponentProps<typeof LocalizedTextControl>){return <LocalizedTextControl lengthUnit="utf16" showCount={false} {...props}/>;}
