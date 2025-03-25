async function main () {
  const jiti = (await import('jiti')).createJiti(__filename)
  await jiti.import('./test2.ts')
}

main()
