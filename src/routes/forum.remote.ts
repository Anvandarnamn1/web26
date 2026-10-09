import * as v from 'valibot';
import {form, query} from "$app/server";
import { db } from '../prisma/db';


export const getForum = query(async() => await db.orm.public.forums.all());

export const createForum = form(
    v.object({
            name: v.pipe(v.string(), v.nonEmpty()),
        }),
        async({name}) => {
            await db.orm.public.forums.create({ name });
    
            getForum().refresh();
        }
    );
export const deleteForum = form(
    v.object({
        id: v.string()
    }),
    async({id}) => {
        await db.orm.public.Message.where({forumid:id})
    }
)