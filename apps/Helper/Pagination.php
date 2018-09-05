<?php 

namespace Helper;

class Pagination 
{
	public static function add($currentPage, $totalItems, $limit)
	{
		$totalPages = ceil($totalItems / $limit);

        //Fix next
        if ($currentPage < $totalPages) {
            $next = $currentPage + 1;
        } else {
            $next = $totalPages;
        }

        $page->next = $next;

        if ($currentPage > 1) {
            $before = $currentPage - 1;
        } else {
            $before = 1;
        }

        $page->current_items = ($currentPage - 1) * $limit;
        $page->first = 1;
        $page->before = $before;
        $page->current = $currentPage;
        $page->last = $totalPages;
        $page->total_pages = $totalPages;
        $page->total_items = $totalItems;

        return $page;
	}
}
 ?>