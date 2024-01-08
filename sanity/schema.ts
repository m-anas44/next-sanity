import { type SchemaTypeDefinition } from 'sanity'
import project from './project-schema'
import page from './page-schema'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, page],
}
