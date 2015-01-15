<?php
class rss {
    var $feed;

    function rss($feed)
    {   $this->feed = $feed;  }

    function parse()
    {
        $rss = simplexml_load_file($this->feed);

        $rss_split = array();
        foreach ($rss->channel->item as $item) {
            $title = (string) $item->title; // Title
            $link   = (string) $item->link; // Url Link
            $description = (string) $item->description; //Description
            $rss_split[] = '<tr><td><h6>
        <a href="'.$link.'" title="" >
            '.$title.'
        </a></h6></td></tr>';
        }
        return $rss_split;
    }
    function display($numrows)
    {
        $rss_split = $this->parse();
        $i = 0;

        $rss_data = '';
        while ( $i < $numrows )
        {
            $rss_data .= $rss_split[$i];
            $i++;
            if(empty($rss_split[$i])){
                break;
            }
        }

        return $rss_data;
    }
}