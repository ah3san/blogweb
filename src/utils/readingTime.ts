/**
 * Estimates the reading time of markdown content based on average word count.
 * @param content The raw markdown content string.
 * @returns A string representation, e.g., "5 min read".
 */
export function getReadingTime(content: string): string {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  
  // Clean markdown syntax characters to get a more accurate word count
  const cleanContent = content.replace(/[#*`_\[\]()\-]/g, '');
  const words = cleanContent.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
