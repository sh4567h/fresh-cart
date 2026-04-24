import React from 'react'

export default async function pagw({
  params,
}: {
  params: Promise<{ datails: string }>
}) {
  const {datails} = await params;
  console.log(datails)
  return (
    <div>pagw</div>
  )
}
