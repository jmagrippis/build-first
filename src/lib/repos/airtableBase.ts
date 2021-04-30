import Airtable from 'airtable'

const BASE_ID = 'app0Phu9c70HMJgPl'

export const airtableBase = new Airtable().base(BASE_ID)
