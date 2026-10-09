import * as v from 'valibot';
import {form, getRequestEvent, query} from "$app/server";
import { getRequest } from '@sveltejs/kit/node';
import { db } from '#lib';


export const getmessages = query(v.string(),async(forumid) => await db.orm.public.Message.where({forumid}).all());


export const newmessage = form(
	v.object({
		forumId: v.pipe(v.string(), v.nonEmpty()),
        content: v.pipe(v.string(), v.nonEmpty()),

	}),
    async({forumId, content}) => {
        await db.orm.public.Message.create({ forumid: forumId, text: content});
        getmessages(forumId).refresh();
        
    }

);


export const deleteMessage = form(
    v.object({
        id: v.string()
    }),
    async({id}) => {
        await db.orm.public.Message.where({id}).delete()
    }
)