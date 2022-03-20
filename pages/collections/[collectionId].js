import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Collection = () => {
  const router = useRouter()
  console.log(router.query?.collectionId)

  return (
    <Link href="/">
      <div>{router.query.collectionId}</div>
    </Link>
  )
}

export default Collection
